import database from "../../../../infra/database.js";

async function status(request, response) {
  //NÃO VAI TER CHARSET-UTF8
  //   response.status(200).send("são");
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  response.status(200).json({ chave: "valor" });
}

export default status;
