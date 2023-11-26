// Write your tests here
test('sanity', () => {
  expect(true).toBe(false)
})
import React from "react"
import { render, screen, waitFor, fireEvent } from "@testing-library/react"
import AppFunctional from "./AppFunctional";
import '@testing-library/jest-dom/extend-expect'

// Write your tests here
test('sanity', () => {
  expect(true).toBe(true)
})

test('hata olmadan render ediliyor mu?', () => {
  render(<AppFunctional />);
})

test('reset butonu çalışıyor mu?', () => {
  render(<AppFunctional />);

  const resButton = screen.getByText("reset");
  fireEvent.click(resButton);


  expect(reset).toBeInTheDocument();
})

test("başlangıçta x ve y koordinatları doğru gösteriliyor ", () => {
  render(<AppFunctional />)

  const squares = screen.getByText(/coordinates/i)

  expect(squares).toHaveTextContent("(2,2)")
});

test("yukarı basınca koordinatları doğru gösteriyor", () => {
  render(<AppFunctional />)

  const up = screen.getByText(/coordinates/i)
  const upButton = screen.getByText("YUKARI")

  fireEvent.click(upButton);
  expect(up).toHaveTextContent("(2,1)")
})





test("doğru email girildiğinde başarı mesajı veriyor", async () => {
  render(<AppFunctional />)

  const inputMail = document.querySelector('#email')
  const button = document.querySelector('#submit')

  fireEvent.change(inputMail, { target: { value: "asdasdaasd@gmail.com" } });
  fireEvent.click(button);

  await waitFor(() => {
    const message = screen.queryByText(/win/i);
    expect(message).toBeInTheDocument;
  })

  test("hatalı email girildiğinde hata mesajı veriyor", async () => {
    render(<AppFunctional />)
  
    const inputMail = document.querySelector('#email')
    const button = document.querySelector('#submit')
  
    fireEvent.change(inputMail, { target: { value: "aasdfg@foo.bar" } });
    fireEvent.click(button);
  
    await waitFor(() => {
      const message = screen.queryByText("Ouch: email must be valid email");
      expect(message).toBeInTheDocument;
    })
  })


})