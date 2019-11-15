const money = [
  { level: "15", amount: "1,000,000" },
  { level: "14", amount: "500,000" },
  { level: "13", amount: "250,000" },
  { level: "12", amount: "100,000" },
  { level: "11", amount: "50,000" },
  { level: "10", amount: "25,000" },
  { level: "9", amount: "16,000" },
  { level: "8", amount: "8,000" },
  { level: "7", amount: "4,000" },
  { level: "6", amount: "2,000" },
  { level: "5", amount: "1,000" },
  { level: "4", amount: "500" },
  { level: "3", amount: "300" },
  { level: "2", amount: "200" },
  { level: "1", amount: "100" }
];
const app = new Vue({
  el: "#app",
  data: {
    allQuestions: [],
    question: "",
    qIndex: 0,
    value: true
  },
  async created() {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=15&category=18&type=multiple"
    );
    const data = await res.json();

    this.allQuestions = data.results;
    this.question = this.allQuestions[this.qIndex].question;
  }
});
console.log(question);
