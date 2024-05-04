document.getElementById('mathForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var equation = document.getElementById('equation').value;
    var resultElement = document.getElementById('result');
    try {
      // Use MathJax to process the equation and render it as math notation
      resultElement.innerHTML = '<h4 class="text-body-emphasis ">Preview Equation 📖<p>' + '`' +'<br>'+ equation + '`'+'</p></h4>';
      MathJax.Hub.Queue(["Typeset", MathJax.Hub, resultElement]);
    } catch (error) {
      resultElement.innerHTML = 'Error: ' + error.message;
    }
  });
window.onload = function() {
  var textarea = document.getElementById('equation');
  textarea.value = "∫[0,∞] e^(-x^2) dx = √π / 2";
  var resultDiv = document.getElementById('result');
  resultDiv.innerHTML = "<h4 class='text-body-emphasis'>Preview Equation 📖</h4><p>`∫[0,∞] e^(-x^2) dx = √π / 2`</p>";
};  
