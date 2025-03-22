import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';

export const routes: Routes = [
    {
        path : "",
        component : HomeComponent
    },
    {
        path : "blog",
        component : BlogComponent
    },
    {
        path : "contact",
        component : ContactComponent
    },
    {
        path : "blog/create",
        component : AddPostComponent
    },
    {
        path : "blog/edit/:id",
        component : EditPostComponent
    }
];
