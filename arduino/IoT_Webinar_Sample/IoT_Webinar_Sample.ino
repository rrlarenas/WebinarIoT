
// Incluimos librería
#include <DHT.h>
#include <LED.h>
 
// Definimos el pin digital donde se conecta el sensor
#define DHTPIN 3
// Dependiendo del tipo de sensor
#define DHTTYPE DHT11
 
// Inicializamos el sensor DHT11
DHT dht(DHTPIN, DHTTYPE);
  //set Flag
int flag = 1;

void setup() {
  // Inicializamos comunicación serie
  Serial.begin(9600);
 
  // Iniciamos el sensor DHT
  dht.begin();

  //pinMode(13,OUTPUT);
  LED.create(8);
  LED.create(9);


}

void loop() {
    // Esperamos 5 segundos entre medidas
  delay(2000);

    // Leemos la humedad relativa
  float h = dht.readHumidity();
  // Leemos la temperatura en grados centígrados (por defecto)
  float t = dht.readTemperature();
  // Leemos la temperatura en grados Fahrenheit
  float f = dht.readTemperature(true);
 
  // Comprobamos si ha habido algún error en la lectura
  if (isnan(h) || isnan(t) || isnan(f)) {
    Serial.println("Error obteniendo los datos del sensor DHT11");
    return;
  }
 
  // Calcular el índice de calor en Fahrenheit
  float hif = dht.computeHeatIndex(f, h);
  // Calcular el índice de calor en grados centígrados
  float hic = dht.computeHeatIndex(t, h, false);
  if(flag == 0 ){
  Serial.print("<Medicion>");
  Serial.print("<Tipo>Humedad</Tipo><Valor>");Serial.print(h);Serial.print("</Valor><Udm>%</Udm>");
  Serial.println("</Medicion>");
  flag = 1;
  }else{
  Serial.print("<Medicion>");
  Serial.print("<Tipo>Temperatura</Tipo><Valor>");Serial.print(t);Serial.print("</Valor><Udm>*C</Udm>");
  Serial.println("</Medicion>");
  flag = 0;
  }
//  Serial.print("<Temperatura>");
//  Serial.print(t);
//  Serial.println("</Temperatura>");
  //Serial.print(f);
  //Serial.print(" *F\t");
  //Serial.print("Indice de calor: ");
  //Serial.print(hic);
  //Serial.print(" *C ");
 // Serial.print(hif);
  //Serial.println(" ");

  int Dato = Serial.read();
  if (Dato == '1'){
   // digitalWrite(13,HIGH);
    LED.on(8);
    LED.off(9);
    }
  if (Dato == '0'){
    //digitalWrite(13,LOW);
    LED.on(9);
    LED.off(8);
    }
  
 
}
