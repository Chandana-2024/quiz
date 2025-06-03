function checkAnswers() {
      const correctAnswers = {
        q1: 'a',
        q2: 'c',
        q3: 'b',
        q4: 'd',
        q5: 'b',
        q6: 'b',
        q7: 'c',
        q8: 'b',
        q9: 'd',
        q10: 'c'
      };

      let score = 0;
      for (let key in correctAnswers) {
        const selected = document.querySelector(`input[name=${key}]:checked`);
        if (selected && selected.value === correctAnswers[key]) {
          score++;
        }
      }

      alert(`You scored ${score}/10`);
    }