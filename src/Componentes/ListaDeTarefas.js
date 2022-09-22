import React,{Component} from "react";
import{Text,View,TouchableOpacity,color} from 'react-native';
import{listaStyle} from '../Estilos/styles';
import substring from 'react-moment';




const getdata = () => {
    var dia = new Date().getDate();
    var mes = new Date().getMonth() + 1;
    var ano = new Date().getFullYear();


    return ano*365 + mes* 30 + dia;
}





class ListaDeTarefas extends Component{ 
  getstyle2=()=>{
     var diaDigUser = this.props.datafinal.substring(0,2);
     var mesDigUser = this.props.datafinal.substring(3,5)*30;
     var anoDigUser = this.props.datafinal.substring(6,10)*365;
     var totalDigUser = parseInt(diaDigUser) + parseInt(mesDigUser) + parseInt(anoDigUser);  
     var diasParaDataFinal = totalDigUser - getdata();

     this.dateUser = totalDigUser;
     this.dateNow = getdata();
     this.diasPraDatFinal = diasParaDataFinal;

     if(diasParaDataFinal < 0){
         return {color:'red'}
     }else{
         return {color:'green'}
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



  
    
    render(){
        return(


            <View style={{alignItems:'center',marginBottom:10}} >
                        

                        
                       <View style={listaStyle.containerListagem}> 
                            <View style={this.props.estilos} >
                                <Text style={listaStyle.testosDeTarefaPendentes}>descricao : {this.props.descricao }</Text>
                                <Text style={listaStyle.testosDeTarefaPendentes}>Tarefa Cadastrada : {this.props.datainicial }</Text>
                                <Text style={[listaStyle.testosDeTarefaPendentes,this.getstyle2()]}>Taréfa estará pronta : {this.props.datafinal }</Text>
                                <Text style={listaStyle.testosDeTarefaPendentes}>Prioridade:  {this.props.prioridade }</Text>
                                <Text style={this.getStilo()}>Estatus:{this.props.estatus }</Text>
                                <Text style={listaStyle.testosDeTarefaPendentes}>ID:{this.props.id}</Text>

                                <Text style={this.getstyle2()}>data atual: { this.dateNow  }</Text>
                                <Text style={this.getstyle2()}>data user: {this.dateUser }</Text>
                                <Text style={this.getstyle2()}>Diferença de dias: {this.diasPraDatFinal }</Text>
                                
                                
                               
                               
                                
                              

                               
                                
                                
                              

                                
                                
                                
                               
                                                   
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