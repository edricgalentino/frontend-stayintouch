import { AES, enc, mode, pad } from "crypto-js";

class crypto {
  private static CONFIG = {
    SECRET: process.env.NEXT_PUBLIC_ENCRYPTION_KEY || "pcx1602023Azhyutisand737",
    IV: process.env.NEXT_PUBLIC_ENCRYPTION_IV || "tandim0mansndhghbd@!6bu*",
  };
  public static encrypt(data: object | string | any[] | number | boolean) {
    const encrypted = AES.encrypt(JSON.stringify(data), crypto.CONFIG.SECRET, {
      mode: mode.ECB,
      padding: pad.Pkcs7,
    });
    return encodeURIComponent(encrypted.toString());
  }

  public static decrypt(data: string) {
    if (!data) return null;
    const decrypted = AES.decrypt(decodeURIComponent(data), crypto.CONFIG.SECRET, {
      mode: mode.ECB,
      padding: pad.Pkcs7,
    });
    return JSON.parse(decrypted.toString(enc.Utf8));
  }
}

export default crypto;
