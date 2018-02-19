learnjs.formatCode=function(obj){
   return obj;
}

function formatProblems(){
   var formattedProblems = [];
   learnjs.problems.forEach(function(problem){
      formattedProblems.push({
         code: learnjs.formatCode(problem.code),
         name: proble.name
      });
   });
   return formattedProblems;
}

function betterFormatProblems(){
   return learnjs.problems.map(learnjs.formatCode);
}

describe('betterFormatProblems', function(){
   beforeEach(function(){
      spyOn(learnjs, 'formatCode').and.callFake(function(problem){
         return {
            code: "formatted",
            name: problem.name
         };
      })
   });

   it('applies a formatter to all the problems', function(){
      expect(betterFormatProblem()[0].code).toEqual("formatted")
   });
});
