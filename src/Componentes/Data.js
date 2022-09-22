

import moment, { isMoment, parseZone } from "moment";
import React,{Component} from "react";
import Moment from "react-moment";
import{Text,View,TouchableOpacity,color} from 'react-native';
import{listaStyle} from '../Estilos/styles';


import Item from "../Model/Item";
import CadastrarTarefas from "./CadastrarTarefas";





const getCurrentDate=()=>{ // esse metodo e no final retorna a data atual, com o formato dd mm aaaa
    var dia = new Date().getDate();
    var mes = new Date().getMonth()+1;
    var ano = new Date().getFullYear();

    if(dia < 10){
         dia = "0" + dia

    }else 
    { dia = dia }

    if(mes < 10){
        mes = "0" + mes
    }else{
        mes = mes
    }

    return dia + '/' +mes +'/'+ ano;
}

class ListaDeTarefas extends Component{ 
    constructor(props){
        super(props)
        this.state={
            dataAtual: new Date(),
            dataFinal:'',

        }
        this.getData = this.getData.bind(this) 
        

        this.dataText = getCurrentDate() // atribuimos o retorno do meto a dataText

    }

getData = ( )=>{ // 
     
    var entrega = this.props.datafinal // atribuimos o valor de data de entrega digitada pelo usuario para var entrego
     this.datafn = entrega // aqui a var entrega esta sendo adicionada a uma variavel de alcance global maior que var entrega
  
     if(this.datafn < this.dataText){  // aqui pegamos a data atual que é o retorno do metodo getCurrentDate, e comparamos com datafn que é a data fornecida pelo usuario
        return {color: 'red'}
    }else{
        return {color:'blue'}
    }
     
}



   
    getStilo = ()=>{
        var estatusAtual = this.props.estatus;
        if(estatusAtual ==="concluido"){
            return listaStyle.testosDeTarefaConcluida
        }else{
            return listaStyle.pendente
        }
   }


   getData2 = () =>{ // o codigo abaixo é mais simples que os demais 
    // strData = data digitada pelo usuatio
    // strData.split("/")  "O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array"
    // partesData fico definido como um array, por causa do metodo split que dividiu a string strData e retornou 3 substring e formou  um array, e esse array foi atribuido como valor que definil a var partesData como array 
    // dataEntrega recebe como valor um objeto do tipo Date,que recebe por parametro o array dataEntrega no formato string e entrega para dataEntrega um valor do tipo date, ou seja: a data digitada pelo usuario no formato string, foi convertida no tipo date
    var strData = this.props.datafinal; // passamos a variavel digitada pelo usuario para a var strData
    var partesData = strData.split("/"); // aqui a variavel strData é atribuida a partesData , onde strData tambem é submetida ao metodo .split() "O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array"
    var dataEntrega = new Date(partesData[0],partesData[1]-"1",partesData[2]  ); // o array resultado da divisão da string da var strdata passada para partesData, agora esta sendo submetido suas posiçoes com seus valores, para o metodo newDate, onde sera convertido em data
    var dia = partesData[0];
    var mes = partesData[1];
    var ano = partesData[2];
    this.d =dia;
    this.m = mes;
    this.a = ano;
    this.strdt = strData;
    this.arrayDT =dataEntrega;
    this.result = dateAtual - dataEntrega;
    var dateAtual = new Date(); // aqui data new Date com parametro vasio acaba por retornar a data e hora atual
    if(dateAtual < dataEntrega ){ // aqui comparamos a data atual com a data digitada pelo usuario
        return {color: 'blue'}
    }else{
        return {color:'red'}
    }
    
}
    
    render(){
        return(


            <View style={{alignItems:'center',marginBottom:10}} >
                        

                        
                       <View style={listaStyle.containerListagem}> 
                            <View style={this.props.estilos} >
                                <Text style={listaStyle.testosDeTarefaPendentes}>descricao : {this.props.descricao }</Text>
                                <Text style={listaStyle.testosDeTarefaPendentes}>Tarefa Cadastrada : {this.props.datainicial }</Text>
                                <Text style={[listaStyle.testosDeTarefaPendentes,this.getData2()]}>Taréfa estará pronta : {this.props.datafinal }</Text>
                                <Text style={listaStyle.testosDeTarefaPendentes}>Prioridade:  {this.props.prioridade }</Text>
                                <Text style={this.getStilo()}>Estatus:{this.props.estatus }</Text>
                                <Text style={listaStyle.testosDeTarefaPendentes}>ID:{this.props.id}</Text>
                                <Text style={this.getData2()} >data atual:{this.dataText}</Text>
                                
                                <Text style={listaStyle.testosDeTarefaPendentes}>dia:{this.d}</Text>
                                <Text style={listaStyle.testosDeTarefaPendentes}>mes:{this.m}</Text>
                                <Text style={listaStyle.testosDeTarefaPendentes}>ano:{this.a}</Text>
                                <Text style={listaStyle.testosDeTarefaPendentes}>strData:{this.strdt}</Text>
                                <Text style={listaStyle.testosDeTarefaPendentes}>arrayDT:{this.result}</Text>

                               
                                
                                
                              

                                
                                
                                
                               
                                                   
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

// o codigo abaixo é mais simples que os demais 
    // partesData[2],partesData[1]-"1",partesData[0]    aaaa/mm/dd
    // partesData[0],partesData[1]-"1",partesData[2]    dd/mm/aaaa
    // partesData[1]-"1", partesData[0], partesData[2]    mm/dd/aaaa
    // strData = data digitada pelo usuatio
    // strData.split("/")  "O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array"
    // partesData fico definido como um array, por causa do metodo split que dividiu a string strData e retornou 3 substring e formou  um array, e esse array foi atribuido como valor que definil a var partesData como array 
    // dataEntrega recebe como valor um objeto do tipo Date,que recebe por parametro o array dataEntrega no formato string e entrega para dataEntrega um valor do tipo date, ou seja: a data digitada pelo usuario no formato string, foi convertida no tipo date
    //var strData = this.props.datafinal; // passamos a variavel digitada pelo usuario para a var strData