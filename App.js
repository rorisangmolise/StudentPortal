import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView,TouchableOpacity, Text,flag, View , Button , Image  } from 'react-native';
import { SimpleLineIcons,Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <>
    <StatusBar style="auto" />
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <View style={styles.Profile}>
          <TouchableOpacity>
           <SimpleLineIcons name="options-vertical" style={{marginTop:8}} size={26} color="black" />
          </TouchableOpacity>
           <View style={styles.ProfilePicture}>
             <Image source={require("./assets/Profile.jpg")}
              style={{height:160,width:160,borderRadius: 75}}/>
           </View>
            <Ionicons name="search" size={22} color="black" style={{marginTop:8, marginStart:-27}}/>
              <TouchableOpacity>
               <View style={styles.searchBox}>
                 <Text style={styles.searchText}>Search here:</Text>
               </View>
             </TouchableOpacity>
          </View>
            <View style={styles.Details}>
             <Text style={styles.Names}>Rorisang Molise</Text>
             <Text style={styles.studentID}>ID: 901013604</Text>
           </View>
            <Text style={styles.Semesters}>
         Semester1        GPA:  2.82          CGPA:  2.82 
              
             </Text>
             <ScrollView>
          <View style={styles.SModules}>
            <Text >        Algebra                                                                  C-       </Text>
             <Text>  Business communication                                C+ </Text>
            <Text >  Creative and inovation studies                         B- </Text>
            <Text >  Fundamentals of design                                    A-</Text>
            <Text >    Intoduction to computer skills                          C+ </Text>
            <Text > Principles of programming                                C</Text>
        
          </View>
          <Text style={styles.Semesters}>
            Semester2      GPA:  2.82          CGPA:  2.68
          </Text>

          <View style={styles.SModules}>
            <Text >  Intoduction to digital graphics                       C+ </Text>
            <Text >Intoduction to multimedia                              B </Text>
            <Text >Calculus I                                                          PX</Text>
            <Text >Intoduction to databse                                    B-</Text>
            <Text >Intoduction to digital imaging                        C-</Text>
            <Text >Principles of software engeneering              C</Text>
      
          </View>

          <Text style={styles.Semesters}>
            Semester3      GPA:  2.19        CGPA:  2.46
          </Text>

          <View style={styles.SModules}>
            <Text>  C++ programmiing                                          C+ </Text>
            <Text>  Multimedia                                                       B- </Text>
            <Text>Calculus II                                                         F</Text>
            <Text>  Internet technology                                         C+</Text>
            <Text>  Data com & networking                                  C+</Text>
            <Text> Principles of web design                                B- </Text>
            
            </View>
            <Text style={styles.Semesters}>
            Semester4      GPA:  2.19        CGPA:  2.46
          </Text> 

            <View style={styles.S4Modules}>
            <Text> RESULTS = NULL</Text>
        
            </View>
         

            </ScrollView>
      </View>
    </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0, 184, 212)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    width:370,
    marginTop: 25,
    backgroundColor: 'rgb(0, 184, 212)',
    flex:1,
   
  },
  Profile:{
    
    height:240,
    width:350,
    backgroundColor: 'rgb(0, 184, 212)',
    flexDirection: 'row',
  },
  searchBox:{
  flexDirection: 'row',
  height:27,
  width:110,
  backgroundColor: 'rgb(3, 169, 244)',
  borderRadius: 5,
  marginTop:6, 
  },
  ProfilePicture:{
  height: 150,
  width: 150,
  borderRadius:75,
  backgroundColor: 'rgb(0, 184, 212)',
  marginStart:60,
  marginTop: 65,
  },
  searchText:{
    fontSize: 18,
    color:'black'

  },
  Details:{
   backgroundColor: 'rgb(0, 184, 212)',
   width:350,
   alignItems: 'center',
   justifyContent: 'center',
  },
  Names: {
    fontSize:28,
  },
  studentID:{
    fontSize:20,
  },
  Semesters:{
    width:340,
    fontSize:17,
    color:'black',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'rgb(3, 169, 244)'
  },

  SModules:{
    fontSize:20,
    color:'black',
    width:340,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'rgb(0, 229, 255)'

  },
  S4Modules:{
    
    fontSize:20,
    color:'black',
    width:340,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'rgb(0, 229, 255)'
  }

  
});
