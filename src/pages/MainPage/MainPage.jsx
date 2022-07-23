import Filter from "../../components/Filter/Filter";
import TreeForm from "../../components/TreeForm/TreeForm";
import TreesList from "../../components/TreesList/TreesList";
import s from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <section className={`container ${s.main}`}>
      <div className={s.contact_wrapper}>
        <div className={s.contact}>
          <TreeForm />
          <Filter />
          <TreesList />
        </div>
      </div>
    </section>
  );
};

export default MainPage;
