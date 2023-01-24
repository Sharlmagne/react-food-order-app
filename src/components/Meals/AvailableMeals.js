import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Jerk Quarter',
    description: 'Juicy & spicy jamaican chicken meal',
    price: 900.00,
  },
  {
    id: 'm2',
    name: 'Festival',
    description: 'A Jamaican side specialty!',
    price: 80.00,
  },
  {
    id: 'm3',
    name: 'Bammy',
    description: 'American, raw, meaty',
    price: 120.00,
  },
  {
    id: 'm4',
    name: ' Jerk Pork',
    description: 'Best pork in the island',
    price: 1200.00,
  },
];

export default function AvailableMeals() {
    const mealsList = DUMMY_MEALS.map(meal => <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
    />);

    return <section className={classes.meals}>
        <Card>
            <ul>{mealsList}</ul>
        </Card>
    </section>
}