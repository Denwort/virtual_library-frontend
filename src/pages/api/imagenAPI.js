import upload from './uploadAPI';

export default upload.single('foto'); // 'imagen' debe coincidir con el nombre del campo del formulario



/*
import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";

export const POST = async (req, res) => {
  const file = await req.body;
  if (!file) {
    res.status(405).send({"error": "metodo invalido"})
  }
  console.log(file)
  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = Date.now() + file.name.replaceAll(" ", "_");
  console.log(filename);
  try {
    await writeFile(
      path.join(process.cwd(), "public/uploads/" + filename),
      buffer
    );
    res.status(405).send({"error": "metodo invalido"})
  } catch (error) {
    console.log("Error occured ", error);
    res.status(405).send({"error": "metodo invalido"})
  }
};

export default POST
*/