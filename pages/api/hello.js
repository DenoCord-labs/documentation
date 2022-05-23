// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {readdirSync} from 'fs'
export default function handler(req, res) {
  const files = readdirSync(`${process.cwd()}/pages`)
}
