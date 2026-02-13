import os
from sqlalchemy import create_engine, inspect, text
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Get database URL from environment
DATABASE_URL = os.getenv('DATABASE_URL')

if not DATABASE_URL:
    print("Error: DATABASE_URL not found in environment variables.")
    print("Please ensure you have a .env file with your Supabase credentials.")
    exit(1)

print(f"Connecting to database...")

try:
    # Create engine
    engine = create_engine(DATABASE_URL)
    connection = engine.connect()
    
    # Create inspector
    inspector = inspect(engine)
    
    # Get all table names
    table_names = inspector.get_table_names()
    
    if not table_names:
        print("No tables found in the database.")
    
    for table_name in table_names:
        print(f"\nTable: {table_name}")
        print("-" * 30)
        
        # Get columns
        columns = inspector.get_columns(table_name)
        col_names = [col['name'] for col in columns]
        print(f"Columns: {col_names}")
        
        # Get rows (limit to 10 for safety)
        print("Rows (first 10):")
        result = connection.execute(text(f"SELECT * FROM {table_name} LIMIT 10"))
        rows = result.fetchall()
        
        if rows:
            for row in rows:
                print(row)
        else:
            print("(No data)")

    connection.close()

except Exception as e:
    print(f"An error occurred: {e}")
