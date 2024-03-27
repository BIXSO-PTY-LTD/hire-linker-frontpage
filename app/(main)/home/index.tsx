'use client';
import HomeCategories from '#app/(main)/home/components/home-categories';
import HomeDownloadApp from '#app/(main)/home/components/home-download-app';
import HomeFeaturedCourses from '#app/(main)/home/components/home-featured-courses';
import HomeHero from '#app/(main)/home/components/home-hero';
import HomeIntroduce from '#app/(main)/home/components/home-introduce';
import HomeLatestPosts from '#app/(main)/home/components/home-latest-posts';
import HomeNewsletter from '#app/(main)/home/components/home-newsletter';
import HomeTeam from '#app/(main)/home/components/home-team';
import HomeTestimonial from '#app/(main)/home/components/home-testimonial';
import { _coursePosts, _courses, _coursesByCategories, _members, _testimonials } from '#shared/_mock';

export const HomePage = () => {
    return (
        <>
            <HomeHero />

            {/* <HomeOurClients brands={_brandsColor} /> */}

            <HomeIntroduce />

            <HomeFeaturedCourses courses={_courses} />

            <HomeCategories categories={_coursesByCategories} />

            <HomeTeam members={_members.slice(0, 4)} />

            <HomeTestimonial testimonials={_testimonials} />

            <HomeLatestPosts posts={_coursePosts.slice(0, 4)} />

            <HomeDownloadApp />

            <HomeNewsletter />
        </>
    );
};
