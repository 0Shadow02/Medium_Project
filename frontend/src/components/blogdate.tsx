type date= string|number|Date
export const PostDate=(date:date)=>{
    const blogDate = new Date(date);
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    }).format(blogDate);
    return formattedDate   
}