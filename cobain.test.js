import fetch from "node-fetch";
import {expect} from "chai";
import Ajv from "ajv";
import contoh from "../schema/reqresSchema.js"
describe("API Test Suite coba", function () {
    const baseURL = "https://reqres.in";

    it("READ - Get single user", async function () {
        const hasil = await fetch('https://reqres.in/api/users/2')

        //validasi http status nya harus 200
    });
    
    it("create new user", async function (){
    
        const newpost = {
            name: "Morpheus",
            job: "leader"
        }

        const hasilpost = await fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {"content-Type": "application/json"},
            body: JSON.stringify(newpost)
        });
         expect (hasilpost.status, "Pastikan data yang diinput sudah benar").to.equal(201)

const ajv = new ajv ();
const data = await hasilpost.json();
const check = ajv.compile(schema_post);
const hasilSchema = check(data);

expect(hasilSchema, "Schema harus valid").to.be.true


  })
})