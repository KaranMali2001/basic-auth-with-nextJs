import user from "@/models/userModel"

export default function ({params}:any){
    console.log("id extracting from url="+params.id)
    return <div>
        <h1>profile page</h1>
        <br />
        <h1>extracting profile page from url {params.id} </h1>
    </div>
}