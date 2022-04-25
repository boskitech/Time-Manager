let Todos = [
    {
      id: 1995,
      name: "Santa Monica",
      date: "12/05/1995",
      description: "$10,800",
    },
    {
      id: 2000,
      name: "Stankonia",
      date: "10/31/2000",
      description: "$8,000",
    },
    {
      id: 2003,
      name: "Ocean Avenue",
      date: "07/22/2003",
      description: "$9,500",
    },
    {
      id: 1997,
      name: "Tubthumper",
      date: "09/01/1997",
      description: "$14,000",
    },
    {
      id: 1998,
      name: "Wide Open Spaces",
      date: "01/27/1998",
      description: "$4,600",
    },
  ];

  export function getTodos() {
    return Todos;
  }

//   export function getTodo(id) {
//     return Todos.find(
//       (todo) => todo.id === id
//     );
//   }