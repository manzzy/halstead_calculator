const express = require('express');
const router = express.Router();
const Lexer = require("./lexer");

router.post("/api", async (req, res) => {
    console.log(req.body);
    if (req.body.code) {
        let stream = req.body.code;
        let lexer = new Lexer(stream);
        await lexer.calculate(stream);
        let result = {
            operators: lexer.getOperators(),
            operands: lexer.getOperands()
        };

        let obj = {
            n1: result.operators.length,
            n2: result.operands.length,
            N1: 0, N2: 0
        }
        result.operators.forEach(el => {
            obj.N1 += el.counter  
        })

        result.operands.forEach(el => {
            obj.N2 += el.counter  
        })
        res.status(200).send(obj);
    } else {
        res.status(400).send("code is required !!!!");
    }
});

module.exports = router;