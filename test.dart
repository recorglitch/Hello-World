void main(List<String> args) async {
  A a = A();
  a.perform();
}

// mixin D {
//   void Hello() {
//     print('This is from D');
//   }
// }

// abstract class Animal {
//   void whoAmI();
// }

// class C {
//   external void speak();

//   void default_x() {
//     print('This is the default method of C.');
//   }
// }

// class B extends Animal {
//   @override
//   void whoAmI() {
//     print('I am a Bird!');
//   }

//   void Hello() {
//     print('Hello from B.');
//   }
// }

class Performer {
  void perform() => print('Perform!');
}

mixin Drummer {
  void playDrums() => print('Playing Drums!');
  void perform() => playDrums();
}

mixin Guitar {
  void playDrums() => print('Playing Guitar!');
  void perform() => playDrums();
}

class A extends Performer with Drummer, Guitar {}
