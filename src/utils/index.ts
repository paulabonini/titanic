import { Passenger } from '../types';

export function csvToJson(csv: string): Passenger[] {
  const processedCsvData = csv.replace(/, /g, ' ').replace(/"/g, '');
  const rows = processedCsvData.split('\n').slice(1); // Exclude header row
  const passengers: Passenger[] = [];

  for (const row of rows) {
    const [PassengerId, Survived, Pclass, Name, Sex, Age, SibSp, Parch, Ticket, Fare, Cabin, Embarked] = row.split(',');

    passengers.push({
      id: parseInt(PassengerId),
      survived: parseInt(Survived),
      pclass: parseInt(Pclass),
      name: Name,
      sex: Sex,
      age: Age !== '' ? parseFloat(Age) : null,
      sibSp: parseInt(SibSp),
      parch: parseInt(Parch),
      ticket: Ticket,
      fare: Fare !== '' ? parseFloat(Fare) : null,
      cabin: Cabin !== '' ? Cabin : null,
      embarked: Embarked
    });
  }

  return passengers;
}
