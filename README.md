# Stable-Marriage-Problem
Name:Prachi Modi

Email:pbmodi@umass.edu

Class: CompSci 220 (Programming Methodologies)

Project Overview: The aim of this assignment is to build an automated testing oracle for a hypothetical solution to the stable
marriage problem. Its job is to generate and feed test inputs to a given solution and test the correctness of the
output. 

         Test           Wheat 0   Wheat 1   Wheat 2   Wheat 3   Wheat 4   Wheat 5   Wheat 6   Wheat 7   Chaff 0   Chaff 1   Chaff 2   Chaff 3   Chaff 4   Chaff 5   Chaff 6    Chaff 7 

---------------------- --------- --------- --------- --------- --------- --------- --------- --------- --------- --------- --------- --------- --------- --------- --------- ---------

 hiresLengthIsCorrect       O          O         O         O         O         O         O         O         O         O         X         O         O         O         O         O    

 preferenceIsCorrect       O         O         O         O         O         O         O         O         X         X         X         X         X         X         X         X    

O = test passed, X = Test failed


Functions:

1) generateInput(n: number): number[][] - This function produces an n by n array of preferences for companies or candidates

2) oracle(f: (candidates: number[][], companies: number[][]) => Hire[]): void   - This function tests   the provided implementation of stable-marriage.

3) shuffle(arr:number[],max:number,min:number):number[]  - This functions generates a random nummber array
