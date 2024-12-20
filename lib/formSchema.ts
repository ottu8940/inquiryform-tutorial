import { z } from "zod";

const MAX_MB = 5
const MAX_FILE_SIZE = MAX_MB * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPE = [
    'image/jpeg',
    'image/png', 
    'image/jpg', 
    'image/gif',
    'image/webp']

const formSchema = z.object({
    username: z.string().min(2, { message: "ユーザー名は2文字以上で入力してください。" }),
    subject: z.string().min(2, { message: "主題は2文字以上で入力してください。" }),
    email: z.string().email({ message: "メールアドレスを正しく入力してください。" }),
    content: z.string().min(10, { message: "内容は10文字以上で入力してください。" })
    .max(160, { message: "内容は160文字以下で入力してください。" }),
    file: z
      .custom<FileList>()
      .refine((files) => files?.length > 0, { message: "ファイル画像が必要です。" })
      .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, { message: `ファイルサイズは${MAX_MB}MB以下で入力してください。` })
      .refine((files) => ACCEPTED_FILE_TYPE.includes(files?.[0]?.type), { message: ".jpg, .jpeg, .png, .gif, .webpのいずれかのファイルを選択してください。" }),
});

  export { formSchema };