export const validationArguments: { [key: string]: any } = {
  firstname: { 
    required: true,
    charPools: [
      {
        diplayMessage: 'Sie können Buchstaben für die Eingabe verwenden',
        chars: /[a-z]/i,
        allowed: true
      },
      {
        diplayMessage: 'Sie können Zahlen für die Eingabe verwenden',
        chars: /[0-9]/i,
        allowed: true
      },
      {
        diplayMessage: 'Die Zahl 3 ist nicht erlaubt',
        chars: /[3]/i,
        allowed: false
      }
    ],
    minLength: 5,
    maxLength: 128
   }
}