import React,{Component} from "react";
import { StyleSheet } from "react-native";


const TarefaStyle = StyleSheet.create({
    containerTarefa:{justifyContent:'center',margin:5},
    textTitulo:{fontSize:20,color:'black',fontWeight:'600', margin:40,textAlign:'center'},

    legendaInput:{backgroundColor:'lightgray',borderWidth:1,height:45,flexDirection:'row',margin:10,padding:1,alignItems:'center',fontSize:15,fontWeight:'500'},
    textInput:{backgroundColor:'lightgray',height:40,fontSize:15,alignItems:'center',color:'green',fontWeight:'500'}
    

})

const listaStyle = StyleSheet.create({
    containerListagem:{backgroundColor:'#d3d3d3',width:'90%',borderWidth:1,borderColor:'grey',padding:5},
    botao:{borderWidth:2,borderColor:'darkblue',width:'48%',alignItems:'center',margin:5,backgroundColor:'#696969'},
    textBotao:{color:'white',fontSize:17},
    testosDeTarefaPendentes:{color:'black',fontWeight:'500'},
    statusTarefa:{color:'darkorange',fontWeight:'500'},
    btAlignHoriz:{flex:1,flexDirection:'row'},
    
    //os codigos abaixos são estilos que aparece  apos clicar no botão concluir para marcar a tarefa como concluida
    concluidoContainer:{backgroundColor:'#8fbc8f',width:'90%'},
    botaoTarefaConcluida:{width:'48%',alignItems:'center',margin:5},
    testosDeTarefaConcluida:{color:'white',fontWeight:'500',margin:1}





})



export {TarefaStyle,listaStyle}