import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import "./Profile.css";

export default function Profile({ handleAddClick, clothingItems, handleCardClick }) {
  return (
    <section className="profile">
      <SideBar />
      <ClothesSection
        handleAddClick={handleAddClick}
        clothingItems={clothingItems}
        handleCardClick={handleCardClick}
      />
    </section>
  );
}
