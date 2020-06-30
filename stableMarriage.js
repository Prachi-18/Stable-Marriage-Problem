function generateInput(n) {
    let array = [];
    for(let i = 0; i < n; ++i) {
      let pref = []
      for(let j = 0; j < n; ++j) {
        pref.push(j);
      }
      array.push(shuffle(pref,n-1,0));
    }
    return array;
  }
  
function shuffle(arr,max,min) {
    for (let i = arr.length - 1; i > 0; --i) {
      let r = (Math.floor(Math.random() * (max - min)) + min);
      let temp = arr[i];
      arr[i] = arr[r];
      arr[r] = temp;
    }
    return arr;
  } 


function oracle(f) {
  let numTests = 30; 
  for (let i = 0; i < numTests; ++i) {
    let n = 20; 
    let companies = generateInput(n);
    let candidates = generateInput(n);
    let hires = f(companies, candidates);
    test('Hires length is correct', function() {
    assert(companies.length === hires.length);
    });

    test('Preference is correct', function(){
    let match = true;
    for(let i= 0 ; i < n; ++i)
    {
      let candi = hires[i].candidate;
      let comp = hires[i].company;
      for(let j= 0; j<n; ++j){
       {
         if(candidates[companies[comp][0]][0] === comp && companies[comp][0]!==candi)
         {
            match = false; 
         }
       }
       
     } 
     assert(match);
     } });
     }
    }
   
