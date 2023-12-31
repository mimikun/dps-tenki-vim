import { Denops } from "https://deno.land/x/denops_std@v1.0.0/mod.ts";
import { execute } from "https://deno.land/x/denops_std@v1.0.0/helper/mod.ts";
import { ensureString } from "https://deno.land/x/unknownutil@v1.0.0/mod.ts";
import * as buffer from "https://deno.land/x/denops_std@v5.0.0/buffer/mod.ts";


const areas = {
  "Hokkaido": "016000", // Sapporo
  "Aomori": "020000",
  "Iwate": "030000",
  "Miyagi": "040000",
  "Akita": "050000",
  "Yamagata": "060000",
  "Fukushima": "070000",
  "Ibaraki": "080000",
  "Tochigi": "090000",
  "Gunma": "100000",
  "Saitama": "110000",
  "Chiba": "120000",
  "Tokyo": "130000",
  "Kanagawa": "140000",
  "Niigata": "150000",
  "Toyama": "160000",
  "Ishikawa": "170000",
  "Fukui": "180000",
  "Yamanashi": "190000",
  "Nagano": "200000",
  "Gifu": "210000",
  "Shizuoka": "220000",
  "Aichi": "230000",
  "Mie": "240000",
  "Shiga": "250000",
  "Kyoto": "260000",
  "Osaka": "270000",
  "Hyogo": "280000",
  "Nara": "290000",
  "Wakayama": "300000",
  "Tottori": "310000",
  "Shimane": "320000",
  "Okayama": "330000",
  "Hiroshima": "340000",
  "Yamaguchi": "350000",
  "Tokushima": "360000",
  "Kagawa": "370000",
  "Ehime": "380000",
  "Kochi": "390000",
  "Fukuoka": "400000",
  "Saga": "410000",
  "Nagasaki": "420000",
  "Kumamoto": "430000",
  "Oita": "440000",
  "Miyazaki": "450000",
  "Kagoshima": "460100",
  "Okinawa": "471000",
};

export async function main(denops: Denops): Promise<void> {
  denops.dispatcher = {
    async echo(text: unknown): Promise<unknown> {
      ensureString(text);
      return await Promise.resolve(text);
    },
  };

  await execute(
    denops,
    `command! -nargs=1 Tenki echomsg denops#request('${denops.name}', 'echo', [<q-args>])`,
  );
};
