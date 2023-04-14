const TemplateExpressions = () => {

    const name = "Matheus"
    const data = {
        age: 25,
        job: "Programmer",
    }
    return (
   <div>
        <h1>Olá, eu me chamo {name}</h1>
        <p>Você atua como: {data.job}</p>
        <p>Sua idade é: {data.age}</p>
   </div>
  );
};
export default TemplateExpressions;