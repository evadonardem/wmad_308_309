//Chetlie_Dawan
import 'package:flutter/material.dart';
import 'dart:math';

void main() {
  runApp(RandomNameGenerator());
}

class RandomNameGenerator extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Random Name Generator',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: RandomNamePage(),
    );
  }
}

class RandomNamePage extends StatefulWidget {
  @override
  _RandomNamePageState createState() => _RandomNamePageState();
}

class _RandomNamePageState extends State<RandomNamePage> {
  List<String> names = [
    'John',
    'Jane',
    'Alice',
    'Bob',
    'Emma',
    'Michael',
    'Sarah',
    'David',
    'Olivia',
    'James',
  ];

  String currentName = '';
  Random random = Random();

  @override
  void initState() {
    super.initState();
    generateRandomName();
  }

  void generateRandomName() {
    setState(() {
      currentName = names[random.nextInt(names.length)];
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Random Name Generator'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              currentName,
              style: TextStyle(fontSize: 36.0),
            ),
            SizedBox(height: 20.0),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: <Widget>[
                ElevatedButton(
                  onPressed: generateRandomName,
                  child: Text('Next'),
                ),
                ElevatedButton(
                  onPressed: () {
                    // Implement like functionality here
                  },
                  child: Text('Like'),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.green,
                  ),
                ),
                ElevatedButton(
                  onPressed: () {
                    // Implement dislike functionality here
                  },
                  child: Text('Dislike'),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.red,
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
