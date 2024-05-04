import Page from "../components/Page";
import Card from "../components/Card";
import Flex from "@/components/Flex";
import { useState } from "react";


export default function CardInterative() {
    const [number, setNumber] = useState('')
    const [name, setName] = useState('SEU NOME')
    const [validity, setValidity] = useState('')
    const [code, setCode] = useState('')
    const regex = /\d/g
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = (dataAtual.getMonth() + 1).toString().padStart(2, '0'); // 
    const valorInicial = `${anoAtual}-${mesAtual}`;

    const NumberCard = '0000 0000 0000 0000'

    const emptyInput = (input: any, e: any) => {
        if (input.length == "") {
            e.target.setAttribute("class", "inputEmpty")
        }
        if (input.length != "") {
            e.target.setAttribute("class", "input")
        }
    }

    const testRegex = (inputValue: any, regex: any) => {
        if (!regex.test(inputValue)) {
            return
        }
    }

    const dataNumber = (e: any) => {
        const inputValue = e.target.value
        emptyInput(inputValue, e)
        if (inputValue.length <= 16) {
            setNumber(inputValue)
            return
        }
        testRegex(inputValue, regex)
    }

    const dataName = (e: any) => {
        const inputValue = e.target.value
        emptyInput(inputValue, e)
        setName(e.target.value)
    }

    const dataValidity = (e: any) => {
        const inputValue = e.target.value
        emptyInput(inputValue, e)
        if (inputValue.length <= 16) {
            setValidity(inputValue)
        }
    }

    const dataCode = (e: any) => {
        const inputValue = e.target.value
        emptyInput(inputValue, e)
        if (inputValue.length <= 3) {
            setCode(inputValue)
            return
        }
        testRegex(inputValue, regex)
    }

    return (
        <Page titulo="Cartão Interativo" subtitulo="Preenchimento de cartão ">
            <Flex centerCross centerMain gap={10}
                className="w-full h-full bg-gradient-to-tr to-purple-900 from-red-600" >
                <Flex centerCross centerMain col>
                    <Card className="justify-between p-8">
                        <span className="text-4xl">{number ? number : NumberCard}</span>
                        <Flex className="justify-between ">
                            <span className="text-xl uppercase overflow-hidden  max-w-80">{name ? name : 'seu nome'}</span>
                            <span className="text-2xl">{validity ? validity : valorInicial}</span>
                        </Flex>
                    </Card>
                    <Card className="justify-around p-8 ml-40">
                        <Flex className="justify-end items-end h-full">
                            <span className="text-2xl">{code == "" ? "000" : code}</span>
                        </Flex>
                    </Card>
                </Flex>
                <Flex centerCross
                    className="h-full text-black">
                    <form className="flex flex-col gap-5 ">
                        <label
                            className="label"
                            htmlFor="number">Número do cartão</label>
                        <input
                            className="input"
                            type="number"
                            id="number"
                            value={number}
                            placeholder="0000 0000 0000 0000"
                            onChange={(e) => dataNumber(e)}
                            required />
                        <label
                            className="label"
                            htmlFor="name">Nome do titular</label>
                        <input
                            className="input text-sm"
                            id="name"
                            type="text"
                            maxLength={24}
                            placeholder={name}
                            onChange={(e) => dataName(e)}
                            required />
                        <label
                            className="label"
                            htmlFor="validity">Validade</label>
                        <input
                            className="input"
                            id="validity"
                            type="month"
                            value={validity}
                            onChange={(e) => dataValidity(e)}
                            required />
                        <label
                            className="label"
                            htmlFor="code">Código de segurança</label>
                        <input
                            className="input"
                            id="code"
                            type="number"
                            placeholder="000"
                            value={code}
                            onChange={(e) => dataCode(e)}
                            required />
                    </form>
                </Flex>
            </Flex>
        </Page>
    )
}