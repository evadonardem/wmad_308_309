import 'package:flutter/material.dart';
import 'dart:math';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Random Name Generator',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: RandomNameGenerator(),
    );
  }
}

class RandomNameGenerator extends StatefulWidget {
  @override
  _RandomNameGeneratorState createState() => _RandomNameGeneratorState();
}

class _RandomNameGeneratorState extends State<RandomNameGenerator> {
  List<String> names = [
    'John',
    'Emma',
    'Michael',
    'Sophia',
    'William',
    'Olivia',
    'James',
    'Ava',
    'Robert',
    'Isabella'
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
              style: TextStyle(fontSize: 30.0),
            ),
            SizedBox(height: 20.0),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: <Widget>[
                IconButton(
                  icon: Icon(Icons.thumb_down),
                  onPressed: () {
                    generateRandomName();
                  },
                  color: Colors.red,
                ),
                IconButton(
                  icon: Icon(Icons.thumb_up),
                  onPressed: () {
                    generateRandomName();
                  },
                  color: Colors.green,
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
