import * as React from 'react';
import { useRouter } from "next/navigation";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import BlogBtn from '../Buttons/BlogBtn';
import { deleteBlogApi } from '../../../Redux/BlogSclice/blogsclice';
import { useDispatch } from 'react-redux';
export default function BlogCard({ blog }) {

  const dispatch = useDispatch();
  const router = useRouter();
  const handleDelete = () => {
    dispatch(deleteBlogApi(blog._id));
  };
  return (
    <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        className='object-cover'
        sx={{ height: 240 }}
        image={blog.image}
        title={blog.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {blog.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="text-gray-700 dark:text-gray-400">
          {blog.content}
        </Typography>
      </CardContent>
      <CardActions className='flex justify-between'>
        <div>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </div>
        <Button size="small"onClick={() => router.push(`/dynamicPages/blog/${blog._id}`)}>Learn More</Button>
      </CardActions>
      <div className='flex flex-wrap justify-between gap-2 p-3'>
     <BlogBtn onClick={()=>router.push("/form")} title={"Create"}/>
     <BlogBtn title={"Update"}/>
     <BlogBtn onClick={() => handleDelete()} title={"Delete"}/>
     
    
    
      </div>
    </Card>
  );
}
