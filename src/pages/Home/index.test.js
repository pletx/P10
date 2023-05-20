import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    

  })
  it("a list a people is displayed", async () => {
    render(<Home/>);
    const images = await screen.findAllByRole("img");

    await screen.findByText("Samira");
    await screen.findByText("CEO");
    const SamiraImage = images.find(
      (img) => img.alt === "Samira");
    expect(SamiraImage).toBeInTheDocument();


    await screen.findByText("Jean-baptiste");
    await screen.findByText("Directeur marketing");
    const jeanBaptisteImage = images.find(
      (img) => img.alt === "Jean-baptiste");
    expect(jeanBaptisteImage).toBeInTheDocument();

    await screen.findByText("Alice");
    await screen.findByText("CXO");
    const AliceImage = images.find(
      (img) => img.alt === "Alice");
    expect(AliceImage).toBeInTheDocument();

    await screen.findByText("Luís");
    await screen.findByText("Animateur");
    const LuísImage = images.find(
      (img) => img.alt === "Luís");
    expect(LuísImage).toBeInTheDocument();

    await screen.findByText("Isabelle");
    await screen.findByText("VP communication");
    const IsabelleImage = images.find(
      (img) => img.alt === "Isabelle");
    expect(IsabelleImage).toBeInTheDocument();



   
  })
  it("a footer is displayed", () => {
    // to implement
  })
  it("an event card, with the last event, is displayed", () => {
    // to implement
  })
});
