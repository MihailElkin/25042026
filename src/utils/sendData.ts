import type { TAnswer } from "../models";

export const sendData = async (answer: TAnswer) => {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzKZMSPcfQQQpJmVIN1G1KuLdeqLLu9mKzRje-3sjuCG7PSACCwP7VxInxGQJDwv-ed/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `id=${encodeURIComponent(answer.id + " - " + answer.names)}&isHasBeen=${encodeURIComponent(String(answer.isHasBeen))}
    &isChildHasBeen=${encodeURIComponent(String(answer.isChildHasBeen))}&alcohol=${encodeURIComponent(answer.alcohol.join(", "))}&message=${encodeURIComponent(answer.message)}`,
      }
    );
    await response.text();
    return true;
  } catch {
    return false;
  }
};
