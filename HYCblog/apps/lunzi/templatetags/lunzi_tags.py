from django import template
from ..models import Article, Category, Tag, Carousel, FriendLink, BigCategory, Activate, Keyword
from django.db.models.aggregates import Count
from django.utils.html import mark_safe
import re

register=template.Library()

@register.simple_tag
def get_bigcategory_list():
    return BigCategory.objects.all()

@register.simple_tag
def get_category_list(id):
    return Category.objects.filter(bigcategory_id=id)

@register.simple_tag
def get_carousel_index():
    return Carousel.objects.filter(number__lte=5)

@register.simple_tag
def get_article_list(sort=None,num=None):

    if sort:
        if num:
            return Article.objects.order_by(sort)[:num]

    if num:
        return Article.objects.all()[:num]

    return Article.objects.all()

@register.simple_tag
def get_carousel_right():
    return Carousel.objects.filter(number__gt=5, number__lte=10)

@register.simple_tag
def get_data_date():
    article_dates = Article.objects.datetimes('create_date', 'month', order='DESC')
    return article_dates

@register.simple_tag
def get_tag_list():
    return Tag.objects.all()

@register.simple_tag
def get_friend_list():
    return FriendLink.objects.all()

# 获取文章标签信息，参数文章ID
@register.simple_tag
def get_article_tag(article_id):
    return Tag.objects.filter(article=article_id)

@register.simple_tag
def get_title(category):
    a = BigCategory.objects.filter(slug=category)
    if a:
        return a[0]

@register.simple_tag
def get_date(year,day):
    pass