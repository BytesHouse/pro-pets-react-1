import LostPetsList from "./LostPetsList";

export default function LostPets() {
  return (
    <ul>
      {LostPetsList.map(({ name, gender, age, images }) => {
        return (
          <li>
            {name}, {gender}, {age} years old
          </li>
        );
      })}
    </ul>
  );
}
