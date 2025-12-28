import type { TAnswer } from "../models";

export const sendData=(answer:TAnswer)=> {
  fetch('https://script.google.com/macros/s/AKfycbzKZMSPcfQQQpJmVIN1G1KuLdeqLLu9mKzRje-3sjuCG7PSACCwP7VxInxGQJDwv-ed/exec', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `id=${encodeURIComponent(answer.id)}&isHasBeen=${encodeURIComponent(String(answer.isHasBeen))}
    &isChildHasBeen=${encodeURIComponent(String(answer.isChildHasBeen))}&alcohol=${encodeURIComponent(answer.alcohol.join(', '))}&message=${encodeURIComponent(answer.message)}`
  })
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
}
