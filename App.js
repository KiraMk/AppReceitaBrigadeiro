import{SafeAreaView, Text, StyleSheet, Image, ScrollView, View } from 'react-native';

export default function App(){

  return(
    <SafeAreaView style={style.container}>
  <Text style={style.titulo}> Brigadeiro. </Text>

  <ScrollView>
  <View style={style.alinhamentoImg}>
  <Image style={style.img} source={require('./assets/AdobeStock_60781884.jpeg')} />
  </View>
  <Text style={style.textosub}> Brigadeiro simples e gostoso </Text>

  <Text style={style.titulosub}> Ingredientes </Text>

<Text style={style.texto}> 
    <Image style={style.peq} source={require('./assets/leite-condensado.webp')} />
    1 caixa de leite condensado </Text>

<Text style={style.texto}>
    <Image style={style.peq} source={require('./assets/achocolado-em-po.webp')} />
     7 colheres de achocolatado pó </Text>

<Text style={style.texto}>
    <Image style={style.peq} source={require('./assets/margarina-sem-sal.webp')} />
     1 colher de margarina sem sal </Text>

 <Text style={style.texto}>
    <Image style={style.peq} source={require('./assets/chocolate-granulado.webp')} />
    chocolate granulado </Text>
  
  <Text style={style.titulosub}> Utensílios </Text>

<Text style={style.texto}>
    <Image style={style.peq} source={require('./assets/43.webp')} />
     Panela </Text>

 <Text style={style.texto}>
    <Image style={style.peq} source={require('./assets/19.webp')} />
     Espátula de Silicone </Text>

 <Text style={style.texto}>
    <Image style={style.peq} source={require('./assets/14.webp')} />
    Copo mediador </Text>

<Text style={style.texto}>
    <Image style={style.peq} source={require('./assets/57.webp')} />
     Prato raso </Text>

    <Text style={style.titulosub}> Modo de Preparo 25min </Text>

    <Text style={style.texto}> 1- Em uma panela funda, acrescente o leite condensado, a margarina e o chocolate em pó. </Text>
    <Text style={style.texto}> 2- Cozinhe em fogo médio e mexa até que o brigadeiro comece a desgrudar da panela. </Text>
    <Text style={style.texto}> 3- Deixe esfriar e faça pequenas bolas com a mão passando a massa no chocolate granulado. </Text>

 </ScrollView>
  </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center' ,
    backgroundColor: '#FFFAFA',
    paddingHorizontal: 10,
    
  },
    img: {
      width:'350',
      height:'250',
      borderWidth: 3,
      borderColor: '#FF4500',
      borderRadius: 10
    },

      textosub: {
        textAlign: 'center',
       marginTop: 15 ,
       marginRight: 5
      },

       titulo: {
        textAlign: 'center',
        fontweight: "bold",
        fontSize: 30 ,
        marginBottom:30 ,
        marginTop: 30 ,
        backgroundColor: '',
        color: '#FF4500'

      },
       titulosub : {
         backgroundColor: '#DCDCDC' ,
         fontweight: "bold",
         fontSize: 20 ,
         textAlign: 'center',
          marginBottom:20 ,
        marginTop: 20 ,
      },

        peq : {
          flexDirection: 'row'

      },

       alinhamentoImg:{
      alignItems: 'center',
  },
  texto: {
    marginBottom: 5 ,
        marginTop: 5 ,
        marginLeft: 20,
        marginRight: 20,
  }
      
})