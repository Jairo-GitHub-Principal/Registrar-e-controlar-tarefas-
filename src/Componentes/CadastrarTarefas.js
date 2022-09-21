import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, View,ScrollView } from 'react-native';
import { listaStyle, TarefaStyle } from '../Estilos/styles.js';
import ListaDeTarefas from './ListaDeTarefas.js';
import ItemDatabase from '../Database/ItemDatabase.js';

import DatePicker from "react-native-date-picker";
import { DatePickerAndroidOpenReturn } from "react-native";


import Item from '../Model/Item.js';
import Datas from './Data.js';
import DataText from './DataText.js';


class CadastrarTarefas extends Component {

    constructor(props) {
        var pendente = "Pendente"
        super(props)
        this.state = {
            descricao:'', 
            datainicial:'',
            datafinal:'', 
            prioridade:'', 
            estatus:pendente, 
            estilos:'', 
            lista:[],

            datainiConvertida:0,
            datafinConvertida:0,
            
        }
        
        
        
    }


    Cadastrar =(descricao,datainicial,datafinal,prioridade,estatus,estilos)=>{
        
           

         
            
            const item = new Item(descricao,datainicial,datafinal,prioridade,estatus,estilos);
            const DB = new ItemDatabase();
            DB.Inserir(item);
            this.Listar();
            

        
      

    }

    Listar = ()=>{
        const DB = new ItemDatabase();
        DB.Listar().then(listaCompleta =>{this.setState({lista:listaCompleta})})

    }

    remover = (id)=>{
        const DB = new ItemDatabase();
        DB.Remover(id)
        this.Listar();
    }
    
    
    Concluir= (item)=>{
        
            
        const DB = new ItemDatabase();
                        
            DB.AtualizarEstatus(item);
           
            this.Listar()
           
        
       

    }


   

   
    
    

    
   


    render(){
        return (
            <ScrollView>
            <View style={TarefaStyle.containerTarefa}>
                        <View>
                            <Text style={TarefaStyle.textTitulo}>Registro de tarefas </Text>
                        </View>


                        <View  style={TarefaStyle.legendaInput} >
                            <Text style={{fontSize:17,fontWeight:'500'}}>Descricao:</Text>
                            <TextInput  style={TarefaStyle.textInput} onChangeText={(valorDig) =>{this.setState({descricao:valorDig})}} ></TextInput>
                        </View >

                        <View  style={TarefaStyle.legendaInput} >
                            <Text style={{fontSize:17,fontWeight:'500'}}>Tarefa Cadastrada:</Text>
                            <TextInput   style={TarefaStyle.textInput} onChangeText={(valorDig) =>{this.setState({datainicial:valorDig})}} ></TextInput>
                            
                        </View >

                        <View  style={TarefaStyle.legendaInput} >
                            <Text style={{fontSize:17,fontWeight:'500'}}>Tarefa estará pronta:</Text>
                            <TextInput  style={TarefaStyle.textInput} onChangeText={(valorDig) =>{this.setState({datafinal:valorDig})}} ></TextInput>
                        </View >

                       
                        
                        <View style={TarefaStyle.legendaInput}>
                            <Text style={{fontSize:17,fontWeight:'500'}}>Prioridade:</Text>
                            <TextInput onChangeText ={(valorDig)=>{this.setState({prioridade:valorDig})}} style={{fontSize:17,fontWeight:'500'}}></TextInput>
                             
                        </View>

                                                                 
                        <View style={{flexDirection:'row',justifyContent:'center',margin:10}}>
                            
                            <View style={listaStyle.botao}>
                                <TouchableOpacity onPress = {()=>this.Cadastrar(this.state.descricao,this.state.datainicial,this.state.datafinal,this.state.prioridade,this.state.estatus,this.state.estilos)}>
                                    <Text style={listaStyle.textBotao}>Cadastrar</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={listaStyle.botao}>
                                <TouchableOpacity onPress={()=>this.Listar()}>
                                    <Text style={listaStyle.textBotao}>Listar</Text>
                                    </TouchableOpacity>
                                </View>
                        </View>

                        <Text style={TarefaStyle.textTitulo}> Lista de tarefas cadastradas</Text>
                        
                        
                        <View>
                            {
                                this.state.lista.map(elementoLista =>(
                                    <ListaDeTarefas   

                                   
                                    descricao  ={elementoLista.descricao}
                                    datainicial={elementoLista.datainicial}
                                    datafinal = {elementoLista.datafinal}
                                    prioridade ={elementoLista.prioridade}
                                    estatus ={elementoLista.estatus}
                                    estilos = {elementoLista.estilos}
                                    item = {elementoLista}
                                    id = {elementoLista.id}
                                  
                                   
                                   
                                    excluir ={this.remover}
                                    concluir={this.Concluir}

                                   
                                    
                                        
                                    

                                   

                                    />
                                    ))
                                
                            }

                            
                        </View>
                       
                        




            </View>
            </ScrollView>
        )
    }
}



export default CadastrarTarefas