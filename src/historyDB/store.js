import {useState,useEffect} from 'react'
import ZangoDB from 'zangodb'
import {IndexDB_config}from '../config'

const Zango = ZangoDB.Db
const db_name = IndexDB_config.db_name
const collections = IndexDB_config.collections

var history_db , pages  

const collectionsConfig = {}

export default function UseHistoryDB(){
    useEffect(() => {  // 连接 indexDB ,使用 ZangoDB 连接和操作 indexDB
        collections.map(col => {
            collectionsConfig[col.colName] = col.colSchema
        });
        history_db = new Zango( db_name, collectionsConfig )
        pages = history_db.collection(collections[0].colName)

        //return ()=>dropDB()
    }, [])
 
    async function add_history( title,path,pageSnapshot,isHome ) {
        let noSavedSamepage = (await find_history({title,path})).length === 0
        /*
        let curPath = history.location.pathname
        deleteLastHistory({curPath}).then(msg=>console.log(msg))
        */
        let res
        
        if(noSavedSamepage){
                await pages.insert({
                    title, path, pageSnapshot, isHome
                },err => {
                    if(err){
                        res = false
                    }else{
                        res = true
                    }
                })

                return res
        }else{
            res = false
            return res
        }
    }
    
    function deleteAHistory(title,path) {
        let queryFilter
     
        if( title&&path ){
            queryFilter = {path,title}
        }else{
            queryFilter = {}
        }
 
        return pages.remove( queryFilter , err=>{
            if(err){
                console.log(err)
            }else{
                //console.log('删除成功：',await find_history())
            }
        })

       
    }

    function deleteLastHistory({deleteStart, curPath}) {
        console.log({deleteStart, curPath})
        return new Promise((resolve, reject) => {

            typeof deleteStart!=undefined && deleteOneByEndIndex(deleteStart)
            typeof curPath!=undefined && deleteOneByEndPath(curPath)

            async function deleteOneByEndIndex(deleteStart) {
                let allHistory = await find_history()
                if (allHistory.length!==0) {
                    let {title, path} = allHistory[allHistory.length-1]
                    deleteAHistory(title,path).then(async ()=>{ 
                        allHistory = await find_history()
                        console.log(allHistory.length)
                        if ( (deleteStart !== 0) ) {
                            if ( deleteStart < allHistory.length-1 )  deleteOneByEndIndex(deleteStart)
                            else resolve(allHistory) 
                        } else if (deleteStart === 0) {
                            if (allHistory.length === 1) return resolve(allHistory) 
                            deleteOneByEndIndex(deleteStart)
                        }
                    } )
                }
            }

            async function deleteOneByEndPath(curPath) {
                let allHistory = await find_history()
                if(!allHistory) return
                let endPathHistory = allHistory.findIndex( el => el.path===curPath)
                console.log(endPathHistory)
                let frontHistory = allHistory.slice(0, endPathHistory > 0 ?  endPathHistory + 1 : 1)
                 
                pages.remove({},err=>{
                    if (!err) {
                        pages.insert(frontHistory, err=>{
                            if(!err ) resolve('已经55')
                        }) 
                    }
                })
            }
        })
    }

    async function find_history(queryFilter={}){
        let historyDocs = []
        if(queryFilter!=={})
        await pages.find(queryFilter).toArray( (err,pageDocs) => {
            historyDocs = pageDocs
        })
        else
        await pages.find().toArray(  (err,pageDocs) => {
             
            historyDocs = pageDocs
        })
        return historyDocs
    }
    
    function dropDB(){
        let history_db = new Zango( db_name, collentiosConfig )
        history_db.drop(err => {
            if(err) {
                throw err
            }
        })
    }
    return{
        add_history,
        deleteAHistory,
        deleteLastHistory,
        find_history,
        dropDB
    }
}
