import 'package:flutter/material.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Dog Breed Guesser',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: DogBreedGuesser(),
    );
  }
}

class DogBreedGuesser extends StatefulWidget {
  @override
  _DogBreedGuesserState createState() => _DogBreedGuesserState();
}

class _DogBreedGuesserState extends State<DogBreedGuesser> {
  String imageUrl = '';
  String correctBreed = '';
  List<String> breeds = [];

  @override
  void initState() {
    super.initState();
    fetchDogImage();
    fetchDogBreeds();
  }

  Future<void> fetchDogImage() async {
    final response =
        await http.get(Uri.parse('https://dog.ceo/api/breeds/image/random'));
    if (response.statusCode == 200) {
      final jsonData = json.decode(response.body);
      setState(() {
        imageUrl = jsonData['message'];
        correctBreed = getBreedFromUrl(imageUrl);
      });
    } else {
      throw Exception('Failed to load dog image');
    }
  }

  Future<void> fetchDogBreeds() async {
    final response =
        await http.get(Uri.parse('https://dog.ceo/api/breeds/list/all'));
    if (response.statusCode == 200) {
      final jsonData = json.decode(response.body);
      List<String> allBreeds = jsonData['message'].keys.toList();
      setState(() {
        breeds = allBreeds;
      });
    } else {
      throw Exception('Failed to load dog breeds');
    }
  }

  String getBreedFromUrl(String url) {
    List<String> parts = url.split('/');
    return parts[parts.length - 2];
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Dog Breed Guesser'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            imageUrl.isNotEmpty
                ? Image.network(
                    imageUrl,
                    width: 300,
                    height: 300,
                  )
                : CircularProgressIndicator(),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                fetchDogImage();
              },
              child: Text('Next Dog'),
            ),
            SizedBox(height: 20),
            Text('Guess the breed:'),
            SizedBox(height: 10),
            DropdownButton<String>(
              value: correctBreed,
              onChanged: (String? newValue) {
                setState(() {
                  correctBreed = newValue!;
                });
              },
              items: breeds.map<DropdownMenuItem<String>>((String value) {
                return DropdownMenuItem<String>(
                  value: value,
                  child: Text(value),
                );
              }).toList(),
            ),
            // Add text field or options for users to enter their guess
            // Add button to check the guess
          ],
        ),
      ),
    );
  }
}
