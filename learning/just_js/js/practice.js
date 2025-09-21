const order1 = {
   customer: "ssselery",
   details: {
      item: "controller",
      date: {
         day: "28.04.2026"
      }
   }
}

const order2 = {
   customer: "kilbi"
}

const processOrder = ({customer, details}) => {
   console.log(`Клиент: ${customer}` + '\n' + `Дата: ${details?.date?.day ?? "Не указана"} `);
}

processOrder(order1)
processOrder(order2)
