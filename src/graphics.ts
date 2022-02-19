import { COLOR_666, N100, STROKE } from './common'

const tamaLine =
  'zqoJlpidqoapAYSeCZOblaabqQunjaeICsXEvsE=*xdkJmZmUnZGWAZWsCZWajpuPlA==*x/MJlZuPm4+U*wcIJm5Wcj5yPn5+nqauwEZmZlJSVlJkJjKptsFyf*r9EJkpiPno+fAbSGCZmTs5GcpQjI6LfpseIJkZGTjpaM*r98R4eGUlJSKjwmPko+nlqQLnY6ejADItRGVlZSUlJWUCZSUlJOUkwuUlZSVEgGbmAmTlI+VkZcAmsEImr2pw6bICY6VgZODjguaiJuICqrCpsgBtoUHlQGSkweVAZeKkpUBpLeXkQF/nAmZmJSdkZYBnYyboA=='
const tamaLineFill =
  'xp8JkoeOh4ySjYqHioebCKasnrSjvQuioqefCsW7xrAJlpOYkJiLlpmYl5iVC5GMi4sS*psgJk5WJn5KjC5+Ln4kJkpSNk4uQEg==*0dIRlZWUlZSVk5WVlJSUk5US'
const tamaFill = 'zb8LkJ2KmHuRcYgIn7aWw5jEC6WZrp0JkpqQn46kiImJp5OglpWen62eq5SzgrN+CtTGzb8S'

const catBase =
  'JjI+DmIyemJaenaCmjpGEjnePloyVg5B9l4SSf4WKkY+Pi42LC5CXjaIInayWwabKCY6ggLuPvpaUmZSckJadoJuikhHr65SUlLSWCNj33vfh8gmVl5aYmZifkqJ+oW2Ygo90hnAS'
const catLine = `4Ko${catBase}*o7wJkpeLmYmTAaqKi5iclwGcl52VALa/A5yXALG+A5OYAZKPk5g=`
const catFill = `5as${catBase}`

const mzsBase = 'JlJmIn3afiZR4knKPiZt8noOQjIiZh6WSoI2rjLaLopOyl7KdEw'
const mzsLine = `76U${mzsBase}GFkpiYAZSQkJg=`
const mzsFill = `8ac${mzsBase}==`

const str2pathes = (
  source: string,
  strokeWidth = 4,
  fill = 'none',
  strokeColor = COLOR_666
): string =>
  source
    .split('*')
    .map(
      (line) =>
        `<path d="M${atob(line)
          .split('')
          .map((c) => c.charCodeAt(0))
          .map((n) => {
            if (n < 20) {
              return 'MmLlHhVvCcSsQqTtAaZz'.charAt(n)
            }
            return n - 148 // -20 -128
          })
          .join(
            ' '
          )}" ${STROKE}=${strokeColor} ${STROKE}-width=${strokeWidth} fill=${fill} ${STROKE}-linecap=round ${STROKE}-linejoin=round />`
    )
    .join('')

const wrapSvgTag = (contents: string, w: number, h: number) =>
  `<svg viewBox="0 0 ${w} ${h}">${contents}</svg>`

export const tamaSvg = wrapSvgTag(
  str2pathes(tamaFill, 0, '#ec6') +
    str2pathes(tamaLine, 2) +
    str2pathes(tamaLineFill, 2, COLOR_666),
  80,
  120
)

export const catSvg = wrapSvgTag(str2pathes(catFill, 0, '#998') + str2pathes(catLine), N100, N100)

export const mzsSvg = wrapSvgTag(str2pathes(mzsFill, 0, '#9bc') + str2pathes(mzsLine), N100, 40)
