import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select'
import { useData } from '@/context/DataContext'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IconDotsVertical } from '@tabler/icons-react'


const NotesCard = () => {
    const { fetchNotesData, notesData, addNewNote, deleteNote, editNote } = useData()
    const [noteContent, setNoteContent] = useState('');
    const [noteEditContent, setNoteEditContent] = useState('');
    const [priority, setPriority] = useState('');
    const [priorityEdit, setPriorityEdit] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [noteId, setNoteId] = useState(0);




    useEffect(() => {
        fetchNotesData()
        console.log(notesData)
    }, [])

    const handleAddNote = () => {
        if (!noteContent) {
            setError('Please enter the note content.');
            return;
        }

        if (!priority) {
            setError('Please select a priority level.');
            return;
        }

        setError(null); // Clear any previous errors
        addNewNote(noteContent, priority);
        setNoteContent('');
        setPriority('');
        setOpen(false); // Close the dialog after deletion

    };

    const handleEditNote = () => {
        if (!noteEditContent) {
            setError('Please enter the note content.');
            return;
        }

        if (!priorityEdit) {
            setError('Please select a priority level.');
            return;
        }

        setError(null); // Clear any previous errors
        editNote(noteId, noteEditContent, priorityEdit);
        setNoteContent('');
        setPriority('');
        setOpenEdit(false); // Close the dialog after deletion

    };

    const handleDeleteNote = async () => {
        await deleteNote(noteId);
        setOpenDelete(false); // Close the dialog after deletion
    };

    return (
        <div className="w-full md:w-1/3 h-full">
            <Card>
                <CardTitle className="text-xl p-4">الملاحظات</CardTitle>
                <CardContent>
                    <div className="p-3 space-y-2 overflow-y-scroll h-[300px]">
                        {notesData?.map((note, index) => (
                            <div key={index} className="flex hover:bg-slate-500/20 rounded-md cursor-pointer p-2 justify-between items-center gap-2">
                                <div className='flex items-center gap-2'>

                                    <div className={`w-2 h-2 rounded-full  ${note.is_important === 'important' ? 'bg-red-500' :
                                        note.is_important === 'balance' ? 'bg-orange-500' :
                                            note.is_important === 'normal' ? 'bg-green-500' : 'bg-slate-200'}`} />
                                    <span className='w-[95%]' style={{ lineBreak: 'anywhere' }}>{note.content}</span>
                                </div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger><IconDotsVertical size={20} /></DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem onClick={() => {
                                            setOpenEdit(true)
                                            setNoteId(note.id)
                                        }
                                        }>Edit</DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => {
                                            setOpenDelete(true)
                                            setNoteId(note.id)
                                        }}>Delete</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>

                            </div>
                        ))}
                    </div>
                    <div>
                        <Dialog open={open} onOpenChange={setOpen}>
                            <DialogTrigger className="w-full">
                                <Button className="w-full bg-orange-600 text-white hover:bg-orange-700">اضف ملاحظه +</Button>
                            </DialogTrigger>
                            <DialogContent className="text-black dark:text-white">
                                <DialogHeader>
                                    <DialogTitle className="text-xl mt-3 text-right">اضافه ملاحظه</DialogTitle>
                                </DialogHeader>

                                {error && <div className="text-red-500 mb-2">{error}</div>}

                                <Label htmlFor="note" className="text-sm font-medium">الملاحظه</Label>
                                <Input
                                    id="note"
                                    placeholder="ادخل الملاحظه"
                                    className="w-full"
                                    value={noteContent}
                                    onChange={(e) => setNoteContent(e.target.value)}
                                />

                                <Label htmlFor="priority" className="text-sm font-medium">مستوي اهميه الملاحظه</Label>
                                <Select onValueChange={(value) => setPriority(value)}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="اختر المستوي" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>مستوي</SelectLabel>
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
                                    <Button onClick={handleAddNote}>اضافه</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                        <Dialog open={openEdit} onOpenChange={setOpenEdit}>
                            <DialogContent className="text-black dark:text-white">
                                <DialogHeader>
                                    <DialogTitle className="text-xl mt-3 text-right">تعديل ملاحظه</DialogTitle>
                                </DialogHeader>

                                {error && <div className="text-red-500 mb-2">{error}</div>}

                                <Label htmlFor="note" className="text-sm font-medium">الملاحظه</Label>
                                <Input
                                    id="note"
                                    placeholder="ادخل الملاحظه"
                                    className="w-full"
                                    value={noteEditContent}
                                    onChange={(e) => setNoteEditContent(e.target.value)}
                                />

                                <Label htmlFor="priority" className="text-sm font-medium">مستوي اهميه الملاحظه</Label>
                                <Select onValueChange={(value) => setPriorityEdit(value)}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="اختر المستوي" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>مستوي</SelectLabel>
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
                                    <Button onClick={handleEditNote}>تعديل</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                        <Dialog open={openDelete} onOpenChange={setOpenDelete}>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle className="text-black dark:text-white">مسح الملاحظه</DialogTitle>

                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <h3 className="text-black dark:text-white">هل تريد مسح هذه الملاحظه؟</h3>
                                    <div className="flex items-center justify-center">
                                        <div className="flex items-center justify-center w-24 h-24 rounded-full bg-red-500/20">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                            >
                                                <path
                                                    d="M21.07 5.23c-1.61-.16-3.22-.28-4.84-.37v-.01l-.22-1.3c-.15-.92-.37-2.3-2.71-2.3h-2.62c-2.33 0-2.55 1.32-2.71 2.29l-.21 1.28c-.93.06-1.86.12-2.79.21l-2.04.2c-.42.04-.72.41-.68.82.04.41.4.71.82.67l2.04-.2c5.24-.52 10.52-.32 15.82.21h.08c.38 0 .71-.29.75-.68a.766.766 0 0 0-.69-.82ZM19.23 8.14c-.24-.25-.57-.39-.91-.39H5.68c-.34 0-.68.14-.91.39-.23.25-.36.59-.34.94l.62 10.26c.11 1.52.25 3.42 3.74 3.42h6.42c3.49 0 3.63-1.89 3.74-3.42l.62-10.25c.02-.36-.11-.7-.34-.95Zm-5.57 9.61h-3.33c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.33c.41 0 .75.34.75.75s-.34.75-.75.75Zm.84-4h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75Z"
                                                    fill="red"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <DialogFooter className="flex gap-5 !justify-between">
                                    <Button onClick={handleDeleteNote} type="button" variant={"destructive"}>
                                        مسح
                                    </Button>
                                    <DialogClose asChild>
                                        <Button type="button" variant="secondary">
                                            الغاء
                                        </Button>
                                    </DialogClose>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                </CardContent>
            </Card>
        </div >
    )
}

export default NotesCard
