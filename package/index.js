import { wizards } from "./src/config/data.js"
export const isWizard = (name) => {
    const verifyWizard = wizards.find(wizard=>wizard === name)
   return verifyWizard ? 'you are a truely wizard, congratulation!' : 'you are not a wizard yet try again'
}
