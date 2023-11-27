function status(request, response) {
  //NÃO VAI TER CHARSET-UTF8
  //   response.status(200).send("são");
  response.status(200).json({ chave: "valor" });
}

export default status;
