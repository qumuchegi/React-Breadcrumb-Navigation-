import {useState,useEffect} from 'react'
import ZangoDB from 'zangodb'
import {IndexDB_config}from '../config'
const Zango = ZangoDB.Db
const db_name = IndexDB_config.db_name
const collections = IndexDB_config.collections

var history_db , pages  
const collentiosConfig = {}

export default function UseHistoryDB(){
 
    useEffect(() => { // 连接 indexDB ,使用 ZangoDB 连接和操作 indexDB
         
        collections.map(col => {
            collentiosConfig[col.colName] = col.colSchema
        });
        history_db = new Zango( db_name, collentiosConfig )
        pages = history_db.collection(collections[0].colName)
        //return ()=>dropDB()
    }, [])
 
    async function add_history( title,path,pageSnapshot ) {
        console.log(pages)
        let noSavedSamepage = (await find_history({title,path})).length === 0
        console.log(noSavedSamepage)
        
        if(noSavedSamepage){
                pages.insert({
                    title, path, pageSnapshot
                },err => {
                    if(err){
                        console.log('indexDB 添加历史失败:',err)
                    }else{
                        console.log('成功添加历史：',title,path,pageSnapshot)
                    }
                })
        }else{
            console.log('已经存储相同页面')
        }
       

    }
    
   
    function deleteAHistory(title,path) {
        console.log( pages )
        title&&path ?
        pages.remove({path,title},err=>{
            if(err){
                console.log(err)
            }
             
        })
        :
        pages.remove({},err=>{
            if(err){
                console.log(err)
            }
             
        })
    }

    async function find_history(queryFilter={}){
        console.log(pages)
        let historyDocs = []
        if(queryFilter!=={})
        await pages.find(queryFilter).toArray( (err,pageDocs) => {
             
            historyDocs = pageDocs
        })
        else
        await pages.find().toArray(  (err,pageDocs) => {
             
            historyDocs = pageDocs
        })
        //console.log(historyDocs)
        return historyDocs
    }
    
    function dropDB(){
        let history_db = new Zango( db_name, collentiosConfig )
        console.log(history_db)
        history_db.drop(err => {
            if(err) console.log(err)
        })
    }

    return{
        add_history,
        deleteAHistory,
        find_history,
        dropDB
    }
}