import React,{Component} from "react";
import{Text,View,TouchableOpacity,color} from 'react-native';
import{listaStyle} from '../Estilos/styles';
import Item from "../Model/Item";
import CadastrarTarefas from "./CadastrarTarefas";



class ListaDeTarefas extends Component{
   
   
    getStilo = ()=>{
        var estatusAtual = this.props.estatus;
        if(estatusAtual ==="concluido"){
            return listaStyle.testosDeTarefaConcluida
        }else{
            return listaStyle.pendente
        }

    }
    
    render(){
        return(


            <View style={{alignItems:'center',marginBottom:10}} >
                        

                        
                       <View style={listaStyle.containerListagem}> 
                            <View style={this.props.estilos} >
                                <Text style={listaStyle.testosDeTarefaPendentes}>descricao : {this.props.descricao }</Text>
                                <Text style={listaStyle.testosDeTarefaPendentes}>Tarefa Cadastrada : {this.props.datainicial }</Text>
                                <Text style={listaStyle.testosDeTarefaPendentes}>Taréfa estará pronta : {this.props.datafinal }</Text>
                                <Text style={listaStyle.testosDeTarefaPendentes}>Prioridade:  {this.props.prioridade }</Text>
                                <Text style={this.getStilo()}>Estatus:{this.props.estatus }</Text>
                                <Text style={listaStyle.testosDeTarefaPendentes}>ID:{this.props.id}</Text>
                                
                                
                               
                                                   
                            </View>

                            <View style={listaStyle.btAlignHoriz} >
                            <TouchableOpacity 
                                onPress={()=> this.props.excluir(this.props.id)}
                                style={listaStyle.botao}>
                                <Text style={listaStyle.textBotao}>Excluir</Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity 
                                onPress={()=> this.props.concluir(this.props.item)}
                                style={listaStyle.botao}>
                                <Text style={listaStyle.textBotao}>Concluir</Text>
                                </TouchableOpacity>

                               

                               
                            </View>
                                                  
                        </View>
            </View>

        )
    }

    
}

export default ListaDeTarefas