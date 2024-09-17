import React, { useEffect } from 'react'
import { Card, CardContent, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select'
import { useData } from '@/context/DataContext'

const NotesCard = () => {
    const { fetchNotesData, notesData, addNewNote } = useData()
    useEffect(() => {
        fetchNotesData()
    }, [])

    return (
        <div className="w-full md:w-1/3 h-full">
            <Card>
                <CardTitle className="text-xl p-4">الملاحظات</CardTitle>
                <CardContent>
                    {/* <div className="flex justify-between">
                            <span>Release v1.2.0</span>
                            <span>72%</span>
                        </div> */}
                    {/* <Progress value={72} /> */}
                    <div className="p-3 space-y-2">
                        <div className="flex hover:bg-slate-500/20 rounded-md cursor-pointer p-2 items-center gap-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full" />
                            <span>اضف المزيد من المهام لتيم البيع والالعانات</span>
                        </div>
                        <div className="flex hover:bg-slate-500/20 rounded-md cursor-pointer p-2 items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full" />
                            <span>جدد اشتراك جوجل  ADS من اجل استمرار البيع</span>
                        </div>
                        <div className="flex hover:bg-slate-500/20 rounded-md cursor-pointer p-2 items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                            <span>لا تنسي تحميل التقاير وارسالها للمدير</span>
                        </div>
                        <div className="flex hover:bg-slate-500/20 rounded-md cursor-pointer p-2 items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                            <span>لا تنسي تحميل التقاير وارسالها للمدير</span>
                        </div>
                        <div className="flex hover:bg-slate-500/20 rounded-md cursor-pointer p-2 items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                            <span>لا تنسي تحميل التقاير وارسالها للمدير</span>
                        </div>

                    </div>
                    <div>
                        <Dialog >
                            <DialogTrigger className='w-full'>
                                <Button className="w-full bg-orange-600 text-white hover:bg-orange-700"> اضف ملاحظه +</Button>
                            </DialogTrigger>
                            <DialogContent className='text-black dark:text-white'>
                                <DialogHeader>
                                    <DialogTitle className='text-xl mt-3 text-right'>اضافه ملاحظه</DialogTitle>
                                </DialogHeader>
                                <Label htmlFor="note" className="text-sm font-medium">الملاحظه</Label>
                                <Input id="note" placeholder='ادخل الملاحظه' className="w-full" />
                                <Label htmlFor='piority' className="text-sm font-medium">مستوي اهميه الملاحظه</Label>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="اختر المستوي" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>مستوي </SelectLabel>

                                            <SelectItem value="important">
                                                <span className="inline-block w-2.5 h-2.5 bg-red-500 rounded-full mr-2"></span>
                                                مهمه جدا
                                            </SelectItem>

                                            <SelectItem value="balance">
                                                <span className="inline-block w-2.5 h-2.5 bg-orange-500 rounded-full mr-2"></span>
                                                متوسطه
                                            </SelectItem>

                                            <SelectItem value="normal">
                                                <span className="inline-block w-2.5 h-2.5 bg-green-500 rounded-full mr-2"></span>
                                                عاديه
                                            </SelectItem>

                                        </SelectGroup>
                                    </SelectContent>
                                </Select>

                                <DialogFooter>
                                    <Button>اضافه</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>


                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default NotesCard